import { Formik, type FormikHelpers } from "formik";
import ActorSelector from "../components/ActorSelector";
import CategorySelector from "../components/CategorySelector";
import MovieData from "../components/MovieData";
import MovieList from "../components/MovieList";
import type { FormikMainFormTypes } from "../types/state";
import { initialMainFormValues } from "../states/initialState";

const MainPage = () => {

  const onSubmit = (values: FormikMainFormTypes, helper: FormikHelpers<FormikMainFormTypes>) => {
    console.log(values)
  }


  return (

    <Formik initialValues={initialMainFormValues} onSubmit={onSubmit}>
      {(formik) => (
       <form onSubmit={formik.handleSubmit}>
        <div className="lg:flex">
            <div className="m-2 lg:w-3/5">
              <MovieList formik={formik}/>
            </div>
            <div className="m-2 lg:w-2/5">
              <MovieData formik={formik}/>
            </div>
          </div>

          <div className="lg:flex">
            <div className="m-2 lg:w-1/2">
              <ActorSelector formik={formik}/>
            </div>
            <div className="m-2 lg:w-1/2">
              <CategorySelector formik={formik} />
            </div>
          </div>
       </form>
      )}
    </Formik>
  );
};

export default MainPage;