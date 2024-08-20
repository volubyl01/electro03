<?php

namespace App\Controller;

use App\Entity\Person;
use App\Repository\PersonRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/persons')]
class PersonController extends AbstractController
{
    #[Route('', name: 'api_persons_index', methods: ['GET'])]
    public function index(PersonRepository $personRepository): JsonResponse
    {
        $persons = $personRepository->findAll();
        $data = [];

        foreach ($persons as $person) {
            $data[] = [
                'id' => $person->getId(),
                'firstname' => $person->getFirstname(),
                'lastname' => $person->getLastname(),
            ];
        }

        return $this->json($data);
    }

    #[Route('/{id}', name: 'api_persons_show', methods: ['GET'])]
    public function show(Person $person): JsonResponse
    {
        $data = [
            'id' => $person->getId(),
            'firstname' => $person->getFirstname(),
            'lastname' => $person->getLastname(),
        ];

        return $this->json($data);
    }

    #[Route('', name: 'api_persons_create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $person = new Person();
        $person->setFirstname($data['firstname']);
        $person->setLastname($data['lastname']);

        $entityManager->persist($person);
        $entityManager->flush();

        return $this->json($person, JsonResponse::HTTP_CREATED);
    }

    #[Route('/{id}', name: 'api_persons_update', methods: ['PUT'])]
    public function update(Request $request, Person $person, EntityManagerInterface $entityManager): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $person->setFirstname($data['firstname']);
        $person->setLastname($data['lastname']);

        $entityManager->flush();

        return $this->json($person);
    }

    #[Route('/{id}', name: 'api_persons_delete', methods: ['DELETE'])]
    public function delete(Person $person, EntityManagerInterface $entityManager): JsonResponse
    {
        $entityManager->remove($person);
        $entityManager->flush();

        return $this->json(null, JsonResponse::HTTP_NO_CONTENT);
    }
}
