import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PostsPage from '../pages/PostsPage.jsx'
import FindFriends from '../pages/FindFriends.jsx'
import ProfilePage from '../pages/ProfilePage.jsx'
import ProtectedRoutes from './ProtectedRoutes'
import NotFound from '../pages/NotFound'
import AuthenticationLayout from '../components/AuthComp/AutenthicationLayout.jsx'
import SignInSection from '../components/AuthComp/SignInSection.jsx'
import SignUpSection from '../components/AuthComp/SignUpSection.jsx'
import CongratsSection from '../components/AuthComp/CongratsSection.jsx'
import VerificationSection from '../components/AuthComp/VerificationSection.jsx'
import EditProfile from '../components/UserProfile/EditProfile/EditProfile.jsx'

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthenticationLayout />}>
          <Route index element={<SignInSection />} />
          <Route path="signup" element={<SignUpSection />} />
          <Route path="congratulations" element={<CongratsSection />} />
          <Route path="verification" element={<VerificationSection />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/find-friends" element={<FindFriends />} />
          <Route path="/profile/:profileId?" element={<ProfilePage />} />
          <Route path="profile/edit" element={<EditProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default PageRoutes
