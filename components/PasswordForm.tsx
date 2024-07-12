import { yupResolver } from "@hookform/resolvers/yup";
import { FormEvent, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";

const passwordSchema = yup.object({
  province: yup.string(),
  regency: yup.string(),
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
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordSchema),
  });

  //   const [wProvince, wRegency] = watch(['province', 'regency'])

  //   useEffect(() => {
  //     if (wProvince) {
  //         // load regency base province
  //     }
  //   }, [wProvince])

  function onSubmit(data: any) {
    console.log({ data });
  }

  return (
    <section className="password__form mb-10">
      <form className="flex flex-col gap-y-3" onSubmit={handleSubmit(onSubmit)}>
        <p>Password</p>
        <div>
          <Controller
            control={control}
            name="province"
            render={({ field: { value, onChange } }) => (
              <select
                value={value}
                onChange={(e: FormEvent<HTMLSelectElement>) => {
                  // load regency
                  onChange(e);
                }}
              >
                <option>DKI Jakarta</option>
                <option>Banten</option>
                <option>Jawa Barat</option>
              </select>
            )}
          />
        </div>
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
