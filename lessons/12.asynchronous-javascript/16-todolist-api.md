# 🛠️ Todolist: The Todolist API

When you refresh the tasklist you created in the previous module, you'll notice that all items in the tasklist are gone.

There's no way for a user to actually use the tasklist.

We want to change this tasklist so it becomes a real component. To do that, we need to work with a real API that lets us save things into a database.

I have created an API for you so you can practice using Ajax in real life. You'll learn about the API in this lesson. Then, we'll improve the tasklist to use the API in the following lessons.

## The root endpoint

The root endpoint for the API is:

```
http://api.learnjavascript.today/tasklist
```

## Users

This API contains users (but no authentication). There's a reason for it.

First, you want to build the tasklist independently from other students. The items they entered in their task list should not affect you. (This is why we need users.

Second, there is no login functionality yet. When there is no login, there isn't a need for authentication. This means you can access other people's tasks (which is a side effect).

The following are the possible user endpoints:

### Get user

Use this to check if your `username` exists. If it exists, the endpoint will respond with a `username` and an `id`

```
GET /users/:username
```

Example:

```js
zlFetch(`${rootendpoint}/users/zellwk`)
```

Response:

```json
{
  "id": "5b8f7b2613b6e114ab5e5644",
  "username": "zellwk"
}
```

### Create user

You need to create a user to use the tasklist API. The API will create three starting tasks for your user automatically.

```
POST /users
```

Input:

Field      | Type   | Description
-----------|--------|------------
`username` | String | **Required**. The user's username

Example:

```js
zlFetch(`${rootendpoint}/users`, {
  method: 'post',
  body: {
    username: 'zellwk'
  }
})
```

Response:

The API returns a success message if the request is successful.

```text
'User zellwk created'
```

### Delete user

Deletes the user and the tasks they've created

```
DELETE /users/:username
```

Response:

The API returns a success message if the request is successful.

```text
'User deleted'
```

## Tasks

The Tasks API is what you'll spend most of your time on. There are endpoints for getting tasks, creating a task, editing a task, and also deleting a task.

### Get tasks

Gets a list of tasks the user has created.

```
GET /users/:username/tasks
```

Example:

```
zlFetch(`${rootendpoint}/users/zellwk/tasks`)
```

Response:

```
[{
  id: '5b8f7b2713b6e114ab5e5645'
  task: 'Learn JavaScript for 30 minutes'
  done: false
}]
```

### Create task

Creates a task.

```
POST /users/:username/tasks/
```

Input:

Field  | Type    | Description
-------|---------|------------
`name` | String  | **Required**. The task
`done` | Boolean | Whether the task completed

Example:

```js
zlFetch(`${rootendpoint}/users/zellwk/tasks`, {
  method: 'post',
  body: { name: 'Poo' }
})
```

Response:

The server will respond with the created task if successful.

```js
{
  "id": "5b8f7b2713b6e114ab5e5645"
  "name": "Learn JavaScript for 30 minutes"
  "done": "false"
}
```

### Update a task

Updates or edits the specified task.

```
PUT /users/:username/tasks/:taskid'
```

Input:

Field  | Type    | Description
-------|---------|------------
`name` | String  | The task.
`done` | Boolean | Whether the task completed

Note: Both `name` and `done` are optional. If you are editing a task, make sure to change one of them. Otherwise, what's the point in making this request?

Example:

```js
zlFetch(`${rootendpoint}/users/zellwk/tasks/5b8f7b2713b6e114ab5e5645`, {
  method: 'put',
  body: { done: true }
})
```

The server will respond with the edited task if successful:

```js
{
  "id": "5b8f7b2713b6e114ab5e5645",
  "name": "Poo",
  "done": "true"
}
```

### Delete a task

Deletes a specified task

```
DELETE /users/:username/tasks/:taskid'
```

Example:

```js
zlFetch(`${rootendpoint}/users/zellwk/tasks/5b8f7b2713b6e114ab5e5645`, {
  method: 'delete'
})
```

Response:

The server will respond with a message and the deleted task.

```json
{
  "message": "Task deleted",
  "deletedTask": {
    "id": "5b8f7b2713b6e114ab5e5645",
    "name": "Poo",
    "done": "true"
  }
}
```

I can't wait to show you how to build the tasklist. Let's get started in the next lesson!