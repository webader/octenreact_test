import {useForm} from "react-hook-form";

const App = () => {
    let {register,handleSubmit,watch,formState:{errors}} = useForm({defaultValues:{title:'title default'}});
    const onSubmit = (data) => {
        console.log(data);

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            // відправлення щоб зберегти дані в плайсхолдере
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    console.log(watch('title'))

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", {required:true})}/>  {/*// тут register створює автоматично інпут з наймом title*/}
                {errors.title && <span>field is required</span>} {/*тут errors рекає помилку і якщо нажати без заповнення тайтл то виведе похибку*/}
                <input {...register("body")}/>
                <input type='submit' value={'save post'}/>

                <select {...register("userId")}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </form>
        </div>
    );
};

export default App;
