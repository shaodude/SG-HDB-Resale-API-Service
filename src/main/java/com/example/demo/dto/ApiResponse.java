package com.example.demo.dto;

public class ApiResponse<T> {
    private int response;
    private String responseMsg;
    private T data;

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

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}

