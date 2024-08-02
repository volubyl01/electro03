<?php

namespace App\Controller;

use App\Entity\TodoList;
use App\Form\TodoListType;
use App\Repository\TodoListRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TodoListController extends AbstractController
{
    #[Route('/', name: 'app_todo')]
    public function index(): Response
    {
        return $this->render('todo/index.html.twig');
    }

    #[Route('/api/todos', name: 'get_todos', methods: ['GET'])]
    public function getTodos(TodoListRepository $todoListRepository): JsonResponse
    {
        $todos = $todoListRepository->findAll();
        return $this->json($todos);
    }

    #[Route('/api/todos', name: 'create_todo', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $todo = new TodoList();
        $todo->setTitle($data['title']);
        $todo->setCompleted($data['completed'] ?? false);

        $entityManager->persist($todo);
        $entityManager->flush();

        return $this->json($todo, Response::HTTP_CREATED);
    }

    #[Route('/api/todos/{id}', name: 'show_todo', methods: ['GET'])]
    public function show(TodoList $todo): JsonResponse
    {
        return $this->json($todo);
    }

    #[Route('/api/todos/{id}', name: 'update_todo', methods: ['PUT'])]
    public function update(Request $request, TodoList $todo, EntityManagerInterface $entityManager): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $todo->setTitle($data['title']);
        $todo->setCompleted($data['completed'] ?? false);

        $entityManager->flush();

        return $this->json($todo);
    }

    #[Route('/api/todos/{id}', name: 'delete_todo', methods: ['DELETE'])]
    public function delete(TodoList $todo, EntityManagerInterface $entityManager): JsonResponse
    {
        $entityManager->remove($todo);
        $entityManager->flush();

        return $this->json(null, Response::HTTP_NO_CONTENT);
    }
}
