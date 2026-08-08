package com.example.event_venue_booking.service;

import com.example.event_venue_booking.entity.Category;
import com.example.event_venue_booking.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    public void createCategory(String category, String description) {
        Category category1=new Category(category,description);
        categoryRepository.save(category1);
    }

    public List<Category> getCategories() {
       return categoryRepository.findAll();
    }



    public Category getCategoryById(Long categoryId) {
        return categoryRepository.findById(categoryId).orElse(null);
    }


    public String updateCategory(Category category) {
        if(!categoryRepository.existsById(category.getCategoryId())){
            return "NO DATA FOUND!";
        }else{
            categoryRepository.save(category);
        }
        return "UPDATED SUCCESSFULLY!";

    }

    public String deleteCategoryById(Long categoryId) {
        if(!categoryRepository.existsById(categoryId)){
            return "NO DATA FOUND!";
        }else{
            categoryRepository.deleteById(categoryId);
        }
        return "DELETED SUCCESSFULLY!";
    }
}
