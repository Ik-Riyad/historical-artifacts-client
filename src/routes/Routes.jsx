import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home/Home';
import AddArtifacts from '../pages/AddArtifacts';
import Error from '../pages/Error';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Loader from '../components/Loader';
import AllArtifacts from '../pages/allArtifacts/AllArtifacts';
import ArtifactDetail from '../pages/ArtifactDetail';
import PrivateRoute from '../provider/PrivateRoute';
import MyArtifacts from '../pages/privateArtifacts/MyArtifacts';
import LikedArtifacts from '../pages/privateArtifacts/LikedArtifacts';
import UpdateArtifact from '../pages/UpdateArtifact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'all-artifacts',
        element: <PrivateRoute> <AllArtifacts /> </PrivateRoute>,
        loader: () => fetch('https://historical-artifact-server.vercel.app/artifacts'),
        hydrateFallbackElement: <Loader />
      },
      {
        path: 'add-artifacts',
        element: <PrivateRoute> <AddArtifacts /> </PrivateRoute>
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Registration />
      },
      {
        path: 'artifact-detail/:id',
        loader: ({ params }) => fetch(`https://historical-artifact-server.vercel.app/artifacts/${params.id}`),
        element: <PrivateRoute><ArtifactDetail /></PrivateRoute>,
        hydrateFallbackElement: <Loader />
      },
      {
        path: 'my-artifacts',
        element: <PrivateRoute> <MyArtifacts /> </PrivateRoute>,
        hydrateFallbackElement: <Loader />
      },
      {
        path: 'liked-artifacts',
        element: <PrivateRoute> <LikedArtifacts /> </PrivateRoute>
      },
      {
        path: 'update/:id',
        loader: ({ params }) => fetch(`https://historical-artifact-server.vercel.app/artifacts/${params.id}`),
        hydrateFallbackElement: <Loader />,
        element: <PrivateRoute> <UpdateArtifact /> </PrivateRoute>
      }
    ]
  },
  {
    path: '/*',
    element: <Error />
  }
]);

export default router;