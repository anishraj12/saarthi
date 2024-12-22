package com.saarthi.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.saarthi.model.User;
import com.saarthi.repo.UserRepo;

import jakarta.servlet.http.HttpSession;

@Service
public class UserService {

	@Autowired
	private UserRepo repo;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	public User saveUser(User user) {
		String password= passwordEncoder.encode(user.getPassword());
		System.out.println(password);
		user.setPassword(password);
		if(repo.findByUsername(user.getUsername())!=null) {
			return null;
		}
		User newuser = repo.save(user);
		return newuser;
	}
	public void removeSessionMessage() {
		HttpSession session = ((ServletRequestAttributes) (RequestContextHolder.getRequestAttributes())).getRequest()
				.getSession();
		session.removeAttribute("msg");
	}
	
	

	public User findByUserName(String username) {
		User user =repo.findByUsername(username);
		return user;
		
	}
	public Optional<User> findById(Long id) {
		Optional<User> user=repo.findById(id);
		return user;
	}
	
}
