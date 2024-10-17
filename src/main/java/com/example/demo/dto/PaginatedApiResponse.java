package com.example.demo.dto;

import org.springframework.data.domain.Page;

public class PaginatedApiResponse<T> extends ApiResponse<T> {
    private int pageNumber;
    private int pageSize;
    private long totalElements;
    private int totalPages;

    public PaginatedApiResponse(int response, String responseMsg, Page<?> page, T data) {
        super(response, responseMsg, data);  // Call the constructor of the parent (APIResponse)
        this.totalElements = page.getTotalElements();
        this.pageNumber = page.getNumber();
        this.pageSize = page.getSize();
        this.totalPages = page.getTotalPages();
    }

    // Getters and Setters
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
}
