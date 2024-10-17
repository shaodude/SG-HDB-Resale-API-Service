package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String month;
    private String town;
    private String flat_type;
    private String block;
    private String street_name;
    private String storey_range;
    private Float floor_area_sqm;
    private String flat_model;
    private Long lease_commence_date;
    private String remaining_lease;
    
    @Column(name = "resale_price") // Map to the existing column name in the database
    private Float resalePrice;

}
