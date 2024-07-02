"use server"

export async function signUpAction(prevState, formData) {
    try {
        const rawFormData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phoneNumber: formData.get('phoneNumber'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
        }
        const req = await fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            body: JSON.stringify(rawFormData),
            headers: {"Content-Type": "application/json"},
        })

        console.log("req" , JSON.stringify(req));
        const res = await req.json()
        console.log("res", res)

        return res;

    } catch (e) {
        console.error(e)
    }
}