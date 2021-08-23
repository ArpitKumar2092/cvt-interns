import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    "@global": {
        ul: {
          margin: 0,
          padding: 0,
          listStyle: "none",
        },
      },
      appBar: {
        background: "linear-gradient(to right, #f0f5fc 60%, #91d2f0)",
        alignItems: "center",
      },
      toolbar: {
        flexWrap: "wrap",
        color: "#EF5F22",
        width: "1200px",
      },
      toolbarTitle: {
        flexGrow: 1,
        wordWrap: "break-word",
      },
    
      links: {
        background: "white",
        color: "#A3A5AA",
        boxShadow: "0 0 10px 0 rgba(0,0,0,.5)",
      },
    foot: {
      padding: theme.spacing(5, 9, 6),
      background: " #f0f5fc ",
    },
    furtile: {
      padding: "160px",
    },
    furtility: {
      background: "#f0f5fc",
      boxShadow: "none",
    },
    sigma: {
      color: "#73cae5",
    },
    link: {
        margin: theme.spacing(3, 2),
        color: "#858892",
      },
  }));


  export { useStyles };