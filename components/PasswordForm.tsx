import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const passwordSchema = yup.object({
  password: yup.string().required("Passwordnya wajib diisi gais"),
  confirm_password: yup
    .string()
    .required("Confirm passwordnya juga diisi")
    .oneOf([yup.ref("password")], "Confirm passwordnya gak sama cuy"),
});

function PasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordSchema),
  });

  function onSubmit(data: any) {
    console.log({ data });
  }

  return (
    <section className="password__form mb-10">
      <form className="flex flex-col gap-y-3" onSubmit={handleSubmit(onSubmit)}>
        <p>Password</p>
        <div>
          <input
            {...register("password")}
            type="password"
            className="border border-black py-1 rounded"
          />
          <p className="text-red-400 text-sm">{errors.password?.message}</p>
        </div>
        <div>
          <input
            {...register("confirm_password")}
            type="password"
            className="border border-black py-1 rounded"
          />
          <p className="text-red-400 text-sm">
            {errors.confirm_password?.message}
          </p>
        </div>
        <button className="bg-black text-white px-5 py-1">Submit</button>
      </form>
    </section>
  );
}

export default PasswordForm;
