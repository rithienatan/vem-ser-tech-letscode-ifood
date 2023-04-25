CREATE INDEX order_details_index ON order_details (product_id);

SELECT COUNT(*) FROM order_details WHERE product_id = 75;