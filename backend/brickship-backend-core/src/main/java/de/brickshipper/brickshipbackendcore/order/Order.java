package de.brickshipper.brickshipbackendcore.order;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity //
@Data   // Generates getters, setters, hashCode(), equals and .toString() methods for you
@Table(name = "brick_shiper_api_db")
public class Order {
    @Id
    // The @Column(name="column_name") annotation does not work here and does not let some fields take any data input
    // (i.e. order_id would evaluate to null. same goes for order_remark, ...)
    private Long order_id;
    private String first_name;
    private String last_name;
    private String full_name;
    private OrderStatus order_status;
    private String order_remark;
    private String order_date;
    private String order_price;

    public Order(Long order_id, String first_name, String last_name, String full_name, OrderStatus order_status, String order_remark, String order_date, String order_price) {
        this.order_id = order_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.full_name = full_name;
        this.order_status = order_status;
        this.order_remark = order_remark;
        this.order_date = order_date;
        this.order_price = order_price;
    }

    public Order() {
    }
}
