import Sidebar from '../Layout/Sidebar';
import TopBar from '../Layout/TopBar';
import { Outlet } from 'react-router-dom';


export default function Dashboard() {

    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Bar */}
                <TopBar />

                {/* Scrollable Content Area */}
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-6">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}
