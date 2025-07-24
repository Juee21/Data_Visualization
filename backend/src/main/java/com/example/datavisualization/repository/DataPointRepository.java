package com.example.datavisualization.repository;

import com.example.datavisualization.model.DataPoint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataPointRepository extends JpaRepository<DataPoint, Long> {
} 