package com.example.event_venue_booking.controller;

import com.example.event_venue_booking.entity.Category;
import com.example.event_venue_booking.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @PostMapping("category")
    public String createCategory(@RequestParam String category,
                                 @RequestParam String description){
        categoryService.createCategory(category,description);
        return category+" "+"category registered Successfully!";
    }

    @GetMapping("category")
    public List<Category> getCategories(){
        return categoryService.getCategories();
    }

    @GetMapping("category/{categoryId}")
    public Category getCategoryById(@PathVariable Long categoryId){
        return categoryService.getCategoryById(categoryId);
    }

    @PutMapping("category")
    public String updateCategory(@RequestBody Category category ){
        return categoryService.updateCategory(category);
    }


    @DeleteMapping("category/{categoryId}")
    public String deleteCategoryById(@PathVariable Long categoryId){
        return categoryService.deleteCategoryById(categoryId);
    }

}
