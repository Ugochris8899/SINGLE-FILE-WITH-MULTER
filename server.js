const app = require( './app' );
PORT = 4040;

app.listen( PORT, () => {
    console.log(`Server is listening to port: ${PORT}`);
})