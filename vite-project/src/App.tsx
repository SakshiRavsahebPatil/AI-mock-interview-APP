import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PublicLayout from "@/layouts/public-layout";
import AuthenticationLayout from "@/layouts/auth-layout";
import ProtectRoutes from "@/layouts/protected-routes";
import { MainLayout } from "@/layouts/main-layout";

import HomePage from "@/routes/home";
import { SignInPage } from "./routes/sign-in";
import { SignUpPage } from "./routes/sign-up";
import { Generate } from "./components/generate";
import { Dashboard } from "./routes/dashboard";
import { CreateEditPage } from "./routes/create-edit-page";
import { MockLoadPage } from "./routes/mock-load-page";
import { MockInterviewPage } from "./routes/mock-interview-page";
import { Contact } from "./components/contact";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Feedback } from "./routes/feedback";

const App = () => {
  return (
    <h1>
  //   <Router>
  //    <Routes>
  // {/* public routes */}
  // <Route path="/" element={<PublicLayout />}>
  //   <Route index element={<HomePage />} />
  // </Route>

  //       <Route element={<MainLayout />}>
  //         <Route path="/contact" element={<Contact />} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/services" element={<Services />} />
  //       </Route>

  //       {/* authentication layout */}
  //       <Route element={<AuthenticationLayout />}>
  //         <Route path="/signin" element={<SignInPage />} />
  //         <Route path="/signup" element={<SignUpPage />} />
  //       </Route>

  //       {/* protected routes */}
  //       <Route
  //         element={
  //           <ProtectRoutes>
  //             <MainLayout />
  //           </ProtectRoutes>
  //         }
  //       >
  //         <Route path="/generate" element={<Generate />}>
  //           <Route index element={<Dashboard />} />
  //           <Route path=":interviewId" element={<CreateEditPage />} />
  //           <Route path="interview/:interviewId" element={<MockLoadPage />} />
  //           <Route path="interview/:interviewId/start" element={<MockInterviewPage />} />
  //           <Route path="feedback/:interviewId" element={<Feedback />} />
  //         </Route>
  //       </Route>
  //     </Routes>
  //   </Router>
  );
};

export default App;
