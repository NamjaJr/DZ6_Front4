import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const UserForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [users, setUsers] = useState([]);

    const onSubmit = (data) => {
        setUsers([...users, data]);
        reset();
    };

    const handleDelete = (index) => {
        setUsers(users.filter((_, i) => i !== index));
    };

    const handleClearTable = () => {
        setUsers([]);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name:</label>
                    <input {...register('name', { required: true })} />
                    {errors.name && <span>Заполните данное поле</span>}
                </div>
                <div>
                    <label>Username:</label>
                    <input {...register('username', { required: true })} />
                    {errors.username && <span>Заполните данное поле</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input {...register('email', { required: true })} />
                    {errors.email && <span>Заполните данное поле</span>}
                </div>
                <div>
                    <label>Phone:</label>
                    <input {...register('phone', { required: true })} />
                    {errors.phone && <span>Заполните данное поле</span>}
                </div>
                <div>
                    <label>Website:</label>
                    <input {...register('website')} />
                </div>
                <div>
                    <button type="submit">Создать</button>
                    <button type="button" onClick={handleClearTable}>Очистить таблицу</button>
                </div>
            </form>

            {users.length === 0 ? (
                <p>Таблица пуста</p>
            ) : (
                <div className="table">
                    <div className="table-header">
                        <div className="table-row">
                            <div className="table-cell">Name</div>
                            <div className="table-cell">Username</div>
                            <div className="table-cell">Email</div>
                            <div className="table-cell">Phone</div>
                            <div className="table-cell">Website</div>
                            <div className="table-cell">Actions</div>
                        </div>
                    </div>
                    <div className="table-body">
                        {users.map((user, index) => (
                            <div className="table-row" key={index}>
                                <div className="table-cell">{user.name}</div>
                                <div className="table-cell">{user.username}</div>
                                <div className="table-cell">{user.email}</div>
                                <div className="table-cell">{user.phone}</div>
                                <div className="table-cell">{user.website}</div>
                                <div className="table-cell">
                                    <button onClick={() => handleDelete(index)}>Удалить</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserForm;
