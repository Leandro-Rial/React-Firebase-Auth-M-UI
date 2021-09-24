import {
  makeStyles,
  Button,
  CardActions,
  CardContent,
  Typography,
  Card,
} from "@material-ui/core";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import DeleteIcon from "@mui/icons-material/Delete";

const cardsStyles = makeStyles({
  containerCard: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  cardscontent: {
    margin: "10px",
  },
  cardsbuttons: {
    display: "flex",
    justifyContent: "space-between",
  },
  claseshr: {
    margin: "10px 0",
  },
  '@media (max-width: 1000px)': {
    containerCard: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
  '@media (max-width: 850px)': {
    containerCard: {
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  }
});

const Home = () => {
  const classes = cardsStyles();

  const { todos, deleteTodo } = useContext(AuthContext);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className={classes.containerCard}>
        {todos.length > 0 ? (
          <>
            {todos.map((todo) => (
              <div key={todo.id}>
                <Card className={classes.cardscontent}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {todo.title}
                    </Typography>
                    <hr className={classes.claseshr} />
                    <Typography sx={{ mb: 1.5 }} color="textSecondary">
                      {todo.subtitle}
                    </Typography>
                    <hr className={classes.claseshr} />
                    <Typography variant="body2">{todo.body}</Typography>
                  </CardContent>
                  <CardActions className={classes.cardsbuttons}>
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </div>
            ))}
          </>
        ) : (
          <Typography variant="h5" align="center">
            No Todos
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Home;
