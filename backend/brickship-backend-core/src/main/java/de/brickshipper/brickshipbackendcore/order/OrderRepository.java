package de.brickshipper.brickshipbackendcore.order;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// Repo: -> uses database (handles interaction)
@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
}