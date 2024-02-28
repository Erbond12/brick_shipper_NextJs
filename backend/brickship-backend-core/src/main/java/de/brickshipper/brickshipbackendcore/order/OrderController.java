package de.brickshipper.brickshipbackendcore.order;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/order")
public class OrderController {


    private final OrderServiceI orderService;


    public OrderController(OrderServiceI orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public ResponseEntity<List<Order>> findAllOrders() {
        return new ResponseEntity<List<Order>> (orderService.findAllOrders(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Order>> findOrderById(@PathVariable("id") Long id){
        return new ResponseEntity<Optional<Order>> (orderService.findById(id), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Order> saveOrder(@RequestBody Order order) {
        return new ResponseEntity<Order> (orderService.saveOrder(order), HttpStatus.OK);
    }
    @PutMapping
    public ResponseEntity<Order> updateOrder(@RequestBody Order order) {
        return new ResponseEntity<Order> (orderService.updateOrder(order), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable("id") Long id) {
        orderService.deleteOrder(id);
    }

}

//Notes: (dead code -> to be deleated)
/*@GetMapping
  // The type ResponseEntity gives us the Metadata like the status code 200 to the frontend
public ResponseEntity<Order> getOrder(@RequestParam(value = "name", defaultValue = "World") String name){
    Name buyerName = new Name("john", "smith");
    LocalDate date = LocalDate.of(2017, Month.APRIL, 04);
    BigDecimal price = new BigDecimal("8.30");

    Order order = new Order(12, "john", "smith", "john smith", OrderStatus.PAID, "A8", date, price);

    return new ResponseEntity<Order>(order, HttpStatus.OK);
}*/