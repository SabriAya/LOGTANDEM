import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import Accueil from '../pages/Accueil';
import PageNotFound from '../pages/PageNotFound';
import Presentation from '../pages/Presentation';


const ConfigRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" exact element={<Accueil />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/presentation" exact element={<Presentation />} />
        </Route>
    )
);

export default ConfigRouter;
