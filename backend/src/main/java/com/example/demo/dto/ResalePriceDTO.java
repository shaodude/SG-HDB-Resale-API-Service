package com.example.demo.dto;

public class ResalePriceDTO {
    private String streetName;
    private String flatType;
    private double averageResalePrice;

    // Constructor
    public ResalePriceDTO(String streetName, String flatType, double averageResalePrice) {
        this.streetName = streetName;
        this.flatType = flatType;
        this.averageResalePrice = averageResalePrice;
    }

    // Getters and Setters
    public String getStreetName() {
        return streetName;
    }

    public void setStreetName(String streetName) {
        this.streetName = streetName;
    }

    public String getFlatType() {
        return flatType;
    }

    public void setFlatType(String flatType) {
        this.flatType = flatType;
    }

    public double getAverageResalePrice() {
        return averageResalePrice;
    }

    public void setAverageResalePrice(double averageResalePrice) {
        this.averageResalePrice = averageResalePrice;
    }
}
