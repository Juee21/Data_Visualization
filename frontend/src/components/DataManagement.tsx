import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import {
  getAllDataPoints,
  createDataPoint,
  deleteDataPoint,
} from '../services/api';

interface DataPoint {
  id: number;
  name: string;
  value: number;
  category: string;
}

interface FormData {
  name: string;
  value: string;
  category: string;
}

const DataManagement: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<DataPoint[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    value: '',
    category: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      const response = await getAllDataPoints();
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (): Promise<void> => {
    try {
      const newDataPoint = {
        ...formData,
        value: Number(formData.value),
      };
      await createDataPoint(newDataPoint);
      fetchData();
      handleClose();
      setFormData({ name: '', value: '', category: '' });
    } catch (error) {
      console.error('Error creating data point:', error);
    }
  };

  const handleDelete = async (id: number): Promise<void> => {
    try {
      await deleteDataPoint(id);
      fetchData();
    } catch (error) {
      console.error('Error deleting data point:', error);
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Data Management</Typography>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add New Entry
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.value}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(row.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Entry</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="value"
            label="Value"
            type="number"
            fullWidth
            value={formData.value}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="category"
            label="Category"
            type="text"
            fullWidth
            value={formData.category}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DataManagement; 