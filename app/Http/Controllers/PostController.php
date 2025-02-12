<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // Get query parameters
        $search = $request->query('search');
        $filter = $request->query('filter');
        // $order = $request->query('order', 'asc');

        // Start building the query
        $query = Post::query();

        // Apply search
        if ($search) {
            $query->where('title', 'like', '%' . $search . '%');
        }

        // if ($filter) {
        //     $query->where('published', $filter === 'published');
        // }

        // if ($order === 'asc' || $order === 'desc') {
        //     $query->orderBy('created_at', $order);
        // }

        // Paginate the results
        $posts = $query->paginate(10);
        // $posts = [];

        return Inertia::render('Posts/Index', [
            'posts' => $posts,
            'filters' => [
                'search' => $search,
                // 'filter' => $filter,
                // 'order' => $order,
            ],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Posts/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        Post::create($request->only('title', 'content'));

        return redirect()->route('posts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();

        return redirect(route('posts.index'));
    }
}
