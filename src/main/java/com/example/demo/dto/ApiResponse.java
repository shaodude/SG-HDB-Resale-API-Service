package com.example.demo.dto;

import org.springframework.data.domain.Page;

public class ApiResponse<T> {
    private int response;
    private String responseMsg;
    private int pageNumber;
    private int pageSize;
    private long totalElements;
    private int totalPages;
    private T data;

    // Constructor for success response with pagination details
    public ApiResponse(int response, String responseMsg, Page<?> page, T data) {
        this.response = response;
        this.responseMsg = responseMsg;
        this.pageNumber = page.getNumber();
        this.pageSize = page.getSize();
        this.totalElements = page.getTotalElements();
        this.totalPages = page.getTotalPages();
        this.data = data;
    }

    // Constructor for success response with specific transaction
    public ApiResponse(int response, String responseMsg, T data) {
        this.response = response;
        this.responseMsg = responseMsg;
        this.data = data;
    }

    // Constructor for error response with a specific message and status code
    public ApiResponse(int response, String responseMsg) {
        this.response = response;
        this.responseMsg = responseMsg;
        this.data = null;  // No data in case of error
    }

    // Getters and Setters
    public int getResponse() {
        return response;
    }

    public void setResponse(int response) {
        this.response = response;
    }

    public String getResponseMsg() {
        return responseMsg;
    }

    public void setResponseMsg(String responseMsg) {
        this.responseMsg = responseMsg;
    }

    public int getPageNumber() {
        return pageNumber;
    }

    public void setPageNumber(int pageNumber) {
        this.pageNumber = pageNumber;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public long getTotalElements() {
        return totalElements;
    }

    public void setTotalElements(long totalElements) {
        this.totalElements = totalElements;
    }

    public int getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(int totalPages) {
        this.totalPages = totalPages;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}

