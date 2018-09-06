# 🛠️ Creating a real todolist (Part 1)

The tasklist you created in the previous module doesn't cut it yet. You know how to build it with JavaScript, and the interactions are solid for a start, but it is not enough.

IT's not real yet.

To make the todolist feel real, we need to change the name form todolist to tasklist also, otherwise I feel very gao wei.

To make the tasklist feel real, a user needs to be able to save tasks into a database. It should be persisted. How do I explain persisting? I mean, when you create a task, you need to see the task when you refresh the browser.

We're going to make that happen with a real API, and a real database that I have created for you, just for this course.

We'll go through the API together in this lesson. Then, we will improve your tasklist app to use the API in the subsequent lessons.

## The root endpoint

The root endpoint for all API calls is:

```
http://api.learnjavascript.today/tasklist
```

## Users

### Create user

You need to create a user to use the tasklist API.

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

The API returns a success message if the request is successful.

```text
'User zellwk created'
```

### Get user

You can use this endpoint to check whether your username exists:

```
GET /users/:username
```

Response:

```json
{
  "id": "5b8f7b2613b6e114ab5e5644",
  "username": "zellwk"
}
```

### Delete user

Deletes the user and the tasks they've created

```
DELETE /users/:username
```

If the request is successful, the server returns a message that says: "User deleted".

## Tasks

### Get all tasks

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
`task` | String  | **Required**. The task
`done` | Boolean | Whether the task completed

Example:

```js
zlFetch(`${rootendpoint}/users/zellwk/tasks`, {
  method: 'post',
  body: { task: 'Poo' }
})
```

The server will respond with the created task if successful:

```js
{
  "id": "5b8f7b2713b6e114ab5e5645"
  "task": "Learn JavaScript for 30 minutes"
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
`task` | String  | The task.
`done` | Boolean | Whether the task completed

Note: Both `task` and `done` are optional. If you are editing a task, make sure to change one of them (or they won't be a point in making the request!).

Example:

```js
zlFetch(`${rootendpoint}/users/zellwk/tasks/5b8f7b2713b6e114ab5e5645`, {
  method: 'put',
  body: { task: 'Poo', done: true }
})
```

The server will respond with the created task if successful:

```js
{
  "id": "5b8f7b2713b6e114ab5e5645",
  "task": "Poo",
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

The server will respond with a message and the deleted task.

```json
{
  "message": "Task deleted",
  "deletedTask": {
    "id": "5b8f7b2713b6e114ab5e5645",
    "task": "Poo",
    "done": "true"
  }
}
```

I can't wait to show you how to build the todolist. Let's get started in the next lesson!