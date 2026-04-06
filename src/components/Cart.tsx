"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "@/redux/cartSlice";
import { RootState } from "@/redux/store";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  Container
} from "@mui/material";

export default function Cart() {

  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container maxWidth="md" sx={{ marginTop: 5 }}>
      <Card elevation={3}>
        <CardContent>

          <Typography variant="h4" gutterBottom>
            Cart
          </Typography>

          <Table>

            <TableHead>
              <TableRow>
                <TableCell><b>Product</b></TableCell>
                <TableCell><b>Price</b></TableCell>
                <TableCell><b>Quantity</b></TableCell>
                <TableCell><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>

                  <TableCell>{item.name}</TableCell>

                  <TableCell>${item.price.toFixed(2)}</TableCell>

                  <TableCell>
                    <TextField
                      type="number"
                      size="small"
                      value={item.quantity}
                      sx={{ width: 80 }}
                      onChange={(e) =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: Number(e.target.value),
                          })
                        )
                      }
                    />
                  </TableCell>

                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      Remove
                    </Button>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>

          </Table>

          <Typography
            variant="h6"
            align="right"
            sx={{ marginTop: 3 }}
          >
            Total: ${total.toFixed(2)}
          </Typography>

        </CardContent>
      </Card>
    </Container>
  );
}