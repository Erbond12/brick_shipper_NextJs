package de.brickshipper.brickshipbackendcore.order;

import java.util.List;
import java.util.Optional;

public interface OrderServiceI {
    List<Order> findAllOrders();
    Optional<Order> findById(Long id);
    Order saveOrder(Order order);
    Order updateOrder(Order order);
    void deleteOrder(Long id);

}
