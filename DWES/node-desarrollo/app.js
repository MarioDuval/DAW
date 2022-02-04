import http from 'http';

const requestListener = (req, resp) => {
    let data = "<p> hola paola </p>";
    const _url = new URL(req.url, `http://localhost${req.url}`);
    const newSearchParams = _url.searchParams;
 
    if (_url.pathname == "/movies") {
        if ( newSearchParams != null) {
            const _id = newSearchParams.get("id")
            switch (_id) {
                case "1":
                    data = JSON.stringify([{ id: 1 }]);
                    break;
                case "2":
                    data = JSON.stringify([{ id: 2 }]);
                    break;
                default:
                    data = JSON.stringify([{ id: 1 }, { id: 2 }]);
                    break;
            }
        }
    }

    resp.write(data)
    resp.end();
}

const app = http.createServer(requestListener);

export default app;