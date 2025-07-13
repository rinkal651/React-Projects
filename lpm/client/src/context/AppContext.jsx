import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
export const AppContextProvider = (props) => {


    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

    const [allCourses, setAllCourses] = useState([])
    const [isEductaor, setIsEductaor] = useState(true)


    useEffect(() => {
        console.log("fetchAllCourses")
        fetchAllCourses()
    }, [])
    // Fetch all courses
    const fetchAllCourses = async () => {
        console.log("dummyCourses", dummyCourses)
        setAllCourses(dummyCourses)
    }

    const calculateRating = (course) => {
        if (course.courseRatings && course.courseRatings?.length === 0) {
            return 0;
        }
        let totalRatings = 0
        course.courseRatings?.forEach(rating => {
            totalRatings += rating.rating;
        });

        return totalRatings / course.courseRatings.length
    }

    const value = {
        currency,
        allCourses, navigate, calculateRating, isEductaor, setIsEductaor
    }
    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
}