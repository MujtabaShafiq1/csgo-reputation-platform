import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux";

import MainLayout from "./components/HOC/MainLayout";
import Home from "./pages/Home";
import User from "./pages/User";
import Profile from "./pages/Profile";
import Report from "./pages/Report";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NewFeedback from "./pages/NewFeedback";
import ProtectedRoute from "./components/HOC/ProtectedRoute";
import { getUser } from "./store/userActions";
import { AnimatePresence } from "framer-motion";

function App() {

  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch]);

  return (
    <>
      <MainLayout>
        <AnimatePresence mode='wait'>
          <Routes key={location.pathname} location={location}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/faq" element={<Faq />} />
            <Route exact path="/user/:id" element={<User />} />
            <Route element={<ProtectedRoute />}><Route path="/report" exact element={<Report />} /></Route>
            <Route path="/contact" exact element={<Contact />} />
            <Route element={<ProtectedRoute />}><Route path="/profile" exact element={<Profile />} /></Route>
            <Route element={<ProtectedRoute />}><Route path="/feedback" exact element={<NewFeedback />} /></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </MainLayout>
    </>
  );
}

export default App;
