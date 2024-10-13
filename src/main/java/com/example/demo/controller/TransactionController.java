package com.example.demo.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Transaction;
import com.example.demo.repository.TransactionRepository;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.example.demo.dto.ApiResponse;

import com.example.demo.exceptions.ResourceNotFoundException;


@RestController
public class TransactionController {

	@Autowired
    private TransactionRepository transactionRepository;

    // Get Page of transactions from database
    @GetMapping("/transactions")
    public ResponseEntity<ApiResponse<List<Transaction>>>  getTransactions(
            @RequestParam(defaultValue = "0") @Min(0) int page,
            @RequestParam(defaultValue = "100") @Min(0) @Max(100) int size) {
        try {
            // Create a pageable request
        Pageable paging = PageRequest.of(page, size);

        // Fetch paginated transactions
        Page<Transaction> transactionsPage = transactionRepository.findAll(paging);

            // Check if the requested page is out of range
            if (page >= transactionsPage.getTotalPages()) {
                // Return 404 with "Page not found" message if the requested page exceeds total pages
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(new ApiResponse<>(404, "Page not found. The requested page number exceeds the total pages available."));
            }

        // Extract the content (list of transactions) from the Page
        List<Transaction> transactions = transactionsPage.getContent();

        // Create ApiResponse with pagination details and data
        ApiResponse<List<Transaction>> response = new ApiResponse<>(200, "success", transactionsPage, transactions);

        // Return the response
        return ResponseEntity.ok(response);
        } catch (Exception e) {
            // Return 404 with "error" message in case of failure
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                 .body(new ApiResponse<>(500, "error"));
        }
    }

    // Get transaction by ID
    @GetMapping("/transactions/{id}")
    public ResponseEntity<ApiResponse<Transaction>> getTransactionById(@PathVariable Long id) {
        try {
            // Fetch the transaction by ID
            Transaction transaction = transactionRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Transaction not found with id: " + id));

            // Create ApiResponse with the found transaction
            ApiResponse<Transaction> response = new ApiResponse<>(200, "success", transaction);

            // Return the response with HTTP status 200
            return ResponseEntity.ok(response);
        } catch (ResourceNotFoundException e) {
            // Return 404 with the exception's message
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse<>(404, e.getMessage()));
        } catch (Exception e) {
            // Return 500 with "error" message in case of an unexpected exception
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse<>(500, "error"));
        }
    }
 
    // Get page of transactions based on amount filters
    @GetMapping("/transactions/price")
    public ResponseEntity<ApiResponse<List<Transaction>>> getTransactionsByPrice(
            @RequestParam(required = false) Double lt,
            @RequestParam(required = false) Double gt,
            @RequestParam(defaultValue = "0") @Min(0) int page,
            @RequestParam(defaultValue = "100") @Min(0) @Max(100) int size) {
        try {
            // Create a pageable request
            Pageable paging = PageRequest.of(page, size);

            // Build the query based on the provided filters
            Page<Transaction> transactionsPage;
            if (lt != null && gt != null) {
                // Both lt and gt are provided
                transactionsPage = transactionRepository.findByResalePriceLessThanAndResalePriceGreaterThan(lt, gt, paging);
            } else if (lt != null) {
                // Only lt is provided
                transactionsPage = transactionRepository.findByResalePriceLessThan(lt, paging);
            } else if (gt != null) {
                // Only gt is provided
                transactionsPage = transactionRepository.findByResalePriceGreaterThan(gt, paging);
            } else {
                // No filters provided, return all transactions
                transactionsPage = transactionRepository.findAll(paging);
            }

            // Extract the content (list of transactions) from the Page
            List<Transaction> transactions = transactionsPage.getContent();

            // Create ApiResponse with pagination details and data
            ApiResponse<List<Transaction>> response = new ApiResponse<>(200, "success", transactionsPage, transactions);

            // Return the response
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // Return 404 with "error" message in case of failure
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse<>(404, "error"));
        }
    }

    // Get average resale price group by input street_name, flat_type
    @GetMapping("/transactions/average/resale-price")
    public ResponseEntity<ApiResponse<List<Object[]>>> getAverageResalePriceByStreetNameAndFlatType(
            @RequestParam(required = false) String streetName,
            @RequestParam(required = false) String flatType) {
        try {
            // Fetch average resale prices based on the input filters
            List<Object[]> results = transactionRepository.findAverageResalePriceByStreetNameAndFlatType(streetName, flatType);
    
            // Create ApiResponse with the data
            ApiResponse<List<Object[]>> response = new ApiResponse<>(200, "success", results);
    
            // Return the response
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // Return 500 with "error" message in case of failure
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse<>(500, "An error occurred while processing the request."));
        }
    }

    // Get distinct flat types
    @GetMapping("/transactions/distinct/flat-types")
    public ResponseEntity<ApiResponse<List<String>>> getDistinctFlatTypes() {
        try {
            // Fetch distinct flat types
            List<String> flatTypes = transactionRepository.findDistinctFlatTypes();

            // Create ApiResponse with the data
            ApiResponse<List<String>> response = new ApiResponse<>(200, "success", flatTypes);

            // Return the response
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // Return 500 with "error" message in case of failure
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse<>(500, "An error occurred while processing the request."));
        }
    }

    // Get distinct street names
    @GetMapping("/transactions/distinct/street-name")
    public ResponseEntity<ApiResponse<List<String>>> getDistinctStreetNames() {
        try {
            // Fetch distinct street names
            List<String> streetNames = transactionRepository.findDistinctStreetNames();

            // Create ApiResponse with the data
            ApiResponse<List<String>> response = new ApiResponse<>(200, "success", streetNames);

            // Return the response
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // Return 500 with "error" message in case of failure
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse<>(500, "An error occurred while processing the request."));
        }
    }
    
    
    


}