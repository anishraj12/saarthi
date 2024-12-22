package com.saarthi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.server.Session;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.saarthi.model.User;
import com.saarthi.repo.UserRepo;
import com.saarthi.service.UserService;

import jakarta.servlet.http.HttpSession;

@Controller
public class WelcomeController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	UserRepo userRepo;
	
	@RequestMapping(value = "/welcome", method = RequestMethod.GET)
	public String showWelcomePage(ModelAndView model) {
		System.out.println(" --------- showWelcomePage ---------");
	return "index.html";
	}
	
	
	@GetMapping("/register")
	public String register() {
		return "register";
	}
	
	@GetMapping("/login")
	public String login() {
		return "login";
	}
	
	
	@PostMapping("/saveUser")
	public String saveUser(@ModelAttribute User user, HttpSession session) {
		//System.out.println(user);
		User u=userService.saveUser(user);
		
		System.out.println(u);
		//System.out.println("user id:-"+u.getId());
		if(u !=null) {
			System.out.println("sucess");
			session.setAttribute("msg", "Register Sucessfully");
		}else {
			System.out.println("failed ......");
			session.setAttribute("msg", "Username already exists. Use another username");
			
		}
		return "redirect:/register";
	}
	@GetMapping("/herb")
	public String herb() {
		return "SaarthiAssistent";
	}
	
	@GetMapping("/treatmentIndex")
		public String treatmentIndex() {
		return "TreatmentIndex";
	}
	@GetMapping("/infohub")
	public String infohub() {
	return "infohub";
}
	
}
