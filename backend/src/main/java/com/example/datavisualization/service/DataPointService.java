package com.example.datavisualization.service;

import com.example.datavisualization.model.DataPoint;
import com.example.datavisualization.repository.DataPointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DataPointService {
    
    @Autowired
    private DataPointRepository dataPointRepository;

    public List<DataPoint> getAllDataPoints() {
        return dataPointRepository.findAll();
    }

    public Optional<DataPoint> getDataPointById(Long id) {
        return dataPointRepository.findById(id);
    }

    public DataPoint createDataPoint(DataPoint dataPoint) {
        return dataPointRepository.save(dataPoint);
    }

    public DataPoint updateDataPoint(Long id, DataPoint dataPoint) {
        if (dataPointRepository.existsById(id)) {
            dataPoint.setId(id);
            return dataPointRepository.save(dataPoint);
        }
        return null;
    }

    public void deleteDataPoint(Long id) {
        dataPointRepository.deleteById(id);
    }
} 