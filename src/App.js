import {useForm} from "react-hook-form";
import {savePost} from "./services/post.api.service";

const App = () => {
    let {register,handleSubmit,formState:{errors}} = useForm({defaultValues:{title:'title default'}});
    const onSubmit = (data) => {
        console.log(data);
        savePost(data).then(({data}) => console.log(data));
    }

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
