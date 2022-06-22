import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppCreateItemView } from '../views/create-item.view';
import { AppItemListView } from '../views/item-list.view';
import { AppViewItemView } from '../views/view-item.view';

export function Routing() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppItemListView />} />
            <Route path="create" element={<AppCreateItemView />} />
            <Route path="view/:itemId" element={<AppViewItemView />} />
        </Routes>
    </BrowserRouter>
    );
}