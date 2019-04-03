import * as Yup from "yup";

const getYogaSchema = () => {
  Yup.object().shape({
    firstName: Yup.string()
      .required("This field is required.")
      .min(2),
    lastName: Yup.string()
      .required("This field is required.")
      .min(2),
    certifications: Yup.string()
      .required("This field is required.")
      .min(25),
    specializations: Yup.string().required("This field is required."),
    yogaStyle: Yup.string().required("This field is required."),
    bio: Yup.string().required("This field is required."),
    rates: Yup.string().required("This field is required."),
    location: Yup.string().required("This field is required."),
    image: Yup.string().test("Url can't be more than 200 words", val =>
      val ? val.length <= 200 : ""
    ),
    website: Yup.string().required("This field is required."),
    email: Yup.string().required("This field is required."),
    phone: Yup.string().required("This field is required."),
    // image: Yup.number()
    //   .required("Must be a number.")
    //   .min(1),
    slug: Yup.string().required("This field is required.")

    // photoUrl: Yup.string().test("Url can't be more than 200 words", val =>
    //   val ? val.length <= 200 : ""
    // )
  });
};

getYogaSchema.initialValues = {
  firstName: "",
  lastName: "",
  certifications: "",
  specializations: "",
  yogaStyle: "",
  bio: "",
  rates: "",
  location: "",
  image: "",
  website: "",
  email: "",
  phone: "",
  id: ""
};

export { getYogaSchema };
