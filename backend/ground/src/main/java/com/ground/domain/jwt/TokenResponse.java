package com.ground.domain.jwt;

import lombok.Getter;

@Getter
public class TokenResponse {
	public TokenResponse(String ftoken, String type) {
		this.accessToken = ftoken;
		this.TokenType = type;
	}
	private String accessToken;
	private String TokenType;

}
