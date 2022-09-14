import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {
    EnderecoPage,
    FeedPage,
    HomePage,
    LoginPage,
    RestaurantPage,
    SearchPage,
    SignupPage
} from '../pages'




export const Router = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/homepage' element={<HomePage/>}/>
                <Route path='/loginpage' element={<LoginPage/>}/>
                <Route path='/signuppage' element={<SignupPage/>}/>
                <Route path='/feedpage' element={<FeedPage/>}/>
                <Route path='/enderecopage' element={<EnderecoPage/>}/>
                <Route path='/restaurantpage' element={<RestaurantPage/>}/>
                <Route path='/searchpage' element={<SearchPage/>}/>
                
            </Routes> 
        
        </BrowserRouter>
        
        
        
        )


}