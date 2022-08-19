package com.ground.domain.jwt;

import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;

import com.ground.domain.user.entity.User;
import com.ground.domain.user.repository.UserRepository;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Component
public class BearerAuthInterceptor implements HandlerInterceptor {
    private AuthorizationExtractor authExtractor;
    private JwtTokenProvider jwtTokenProvider;
    @Autowired
    UserRepository userRepository;

    public BearerAuthInterceptor(AuthorizationExtractor authExtractor, JwtTokenProvider jwtTokenProvider) {
        this.authExtractor = authExtractor;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    public boolean preHandle(HttpServletRequest request,
                             HttpServletResponse response, Object handler) {
        log.info(">>> interceptor.preHandle 호출");
        String token = authExtractor.extract(request, "Bearer ");
        
        if (StringUtils.isEmpty(token)) {
            return true;
        }

        if (!jwtTokenProvider.validateToken(token)) {
            throw new IllegalArgumentException("유효하지 않은 토큰입니다.");
        }

        String name = jwtTokenProvider.getSubject(token);
        Optional<User> user = userRepository.findByUsername(name);
        
        if(!token.equals(user.get().getFtoken())) {
        	throw new IllegalArgumentException("사용자의 토큰과 일치하지 않습니다.");
        }
        request.setAttribute("name", name);
        return true;
    }
}
