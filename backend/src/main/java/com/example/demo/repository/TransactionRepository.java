package com.example.demo.repository;

import com.example.demo.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
        // Find transactions where resale_price is less than the specified value
        Page<Transaction> findByResalePriceLessThan(Double resalePrice, Pageable pageable);

        // Find transactions where resale_price is greater than the specified value
        Page<Transaction> findByResalePriceGreaterThan(Double resalePrice, Pageable pageable);

        // Find transactions where resale_price is less than the specified 'lt' value and greater than the specified 'gt' value
        Page<Transaction> findByResalePriceLessThanAndResalePriceGreaterThan(Double lt, Double gt, Pageable pageable);

        // Custom query to get average resale price grouped by street name
        @Query("SELECT t.street_name, t.flat_type, ROUND(AVG(t.resalePrice), 0) FROM Transaction t " +
        "WHERE t.street_name = :streetName " +
        "AND (t.flat_type = :flatType) " +
        "GROUP BY t.street_name, t.flat_type")
        List<Object[]> findAverageResalePriceByStreetNameAndFlatType(@Param("streetName") String streetName, 
                                                             @Param("flatType") String flatType);

                                                             
        // Get distinct street names
        @Query("SELECT DISTINCT t.street_name FROM Transaction t")
        List<String> findDistinctStreetNames();

        // Get distinct flat types
        @Query("SELECT DISTINCT t.flat_type FROM Transaction t")
        List<String> findDistinctFlatTypes();

}
