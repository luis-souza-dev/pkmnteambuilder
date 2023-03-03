import { createBrowserRouter, Outlet } from "react-router-dom";
import { Header, MainSection } from "../core";
import { Home } from "../pages/home/home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

function Root() {
    return (
      <>
        <main className="h-screen w-screen overflow-hidden flex flex-col mx-auto bg-transparent gap-y-2">
            <Header />
            <MainSection>
                <Outlet />
            </MainSection>
        </main>
      </>
    );
  }