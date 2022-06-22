import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from '../App';
import { AppCreateItemView } from '../views/create-item.view';
import { AppViewItemView } from '../views/view-item.view';

export function Routing() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="create" element={<AppCreateItemView />} />
            <Route path="view/:itemId" element={<AppViewItemView />} />
        </Routes>
    </BrowserRouter>
    );
}