package com.example.datavisualization.controller;

import com.example.datavisualization.model.DataPoint;
import com.example.datavisualization.service.DataPointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/data-points")
@CrossOrigin(origins = "http://localhost:3000")
public class DataPointController {

    @Autowired
    private DataPointService dataPointService;

    @GetMapping
    public List<DataPoint> getAllDataPoints() {
        return dataPointService.getAllDataPoints();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DataPoint> getDataPointById(@PathVariable Long id) {
        return dataPointService.getDataPointById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public DataPoint createDataPoint(@RequestBody DataPoint dataPoint) {
        return dataPointService.createDataPoint(dataPoint);
    }

    @PutMapping("/{id}")
    public ResponseEntity<DataPoint> updateDataPoint(@PathVariable Long id, @RequestBody DataPoint dataPoint) {
        DataPoint updatedDataPoint = dataPointService.updateDataPoint(id, dataPoint);
        return updatedDataPoint != null
                ? ResponseEntity.ok(updatedDataPoint)
                : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDataPoint(@PathVariable Long id) {
        dataPointService.deleteDataPoint(id);
        return ResponseEntity.ok().build();
    }
} 