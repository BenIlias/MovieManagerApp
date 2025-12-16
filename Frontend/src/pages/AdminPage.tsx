import { useContext } from "react";
import stateContext from "../types/stateContext";
import { Field, Formik, type FormikHelpers } from "formik";
import { initialSubmitFormik } from "../states/initialState";
import type { FormikSubmitType } from "../types/state";

const AdminPage = () => {
  const { state, dispatch } = useContext(stateContext)

  const onSubmit = (values: FormikSubmitType, helpers: FormikHelpers<FormikSubmitType>) => {
    console.log(values)
  } 

  return (
    <div className="border border-black mx-auto p-4 w-max">

      <Formik initialValues={initialSubmitFormik} onSubmit={onSubmit}>
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label>
                <Field className="mx-1" type="radio" name="selection" value="actor"/>
                Actor
              </label>
              <label>
                <Field className="mx-1" type="radio" name="selection" value="category"/>
                Category
              </label>
              <label>
                <Field className="mx-1" type="radio" name="selection" value="series"/>
                Series
              </label>
              <label>
                <Field className="mx-1" type="radio" name="selection" value="studio"/>
                Studio
              </label>
            </div>
            <div className="my-3">
              <Field
                className="border border-black focus:bg-gray-100 px-2 rounded-xl w-full"
                type="text"
                required
                name="value"
              />
            </div>
            <div className="grid mt-3">
              <button
                className="bg-green-700 hover:bg-green-600 font-semibold p-2 text-center text-white tracking-wider uppercase"
                type="submit"
              >
                Add {formik.values.selection}
              </button>
            </div>
          </form>
        )}
      </Formik>

    </div>
  );
};

export default AdminPage;