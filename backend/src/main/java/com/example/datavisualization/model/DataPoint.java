package com.example.datavisualization.model;

import lombok.Data;
import jakarta.persistence.*;

@Data
@Entity
@Table(name = "data_points")
public class DataPoint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Double value;

    @Column(nullable = false)
    private String category;
}