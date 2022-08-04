package com.ground.domain.follow.controller;

import com.ground.domain.follow.dto.FollowDto;
import com.ground.domain.follow.entity.Follow;

import lombok.RequiredArgsConstructor;
import com.ground.domain.follow.service.FollowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/rest/follow")
public class FollowController {
    private final FollowService followService;


//    @ApiOperation(value = "팔로우", response = String.class)
//    @PostMapping("/{toUserId}")
//    public ResponseEntity<?> followUser(@PathVariable long toUserId, @AuthenticationPrincipal PrincipalDetails principalDetails) {
//        followService.follow(principalDetails.getUser().getId(), toUserId);
//        return new ResponseEntity<>("팔로우 성공", HttpStatus.OK);
//    }


    @PostMapping("/{toUserId}/{fromUserId}")
    @ApiOperation(value = "팔로우", response = String.class)
    public void followUser(@PathVariable Long toUserId, @PathVariable Long fromUserId){
        followService.follow(fromUserId, toUserId);
    }

    @DeleteMapping("/{toUserId}/{fromUserId}")
    @ApiOperation(value = "언팔로우", response = String.class)
    public void unFollowUser(@PathVariable Long toUserId, @PathVariable Long fromUserId){
        followService.unFollow(fromUserId, toUserId);
    }
    @DeleteMapping("/{from_user_id}/follower")
    @ApiOperation(value = "팔로워 삭제", response = String.class)
    public String unFollower(){
        return "test!";
    }

    @GetMapping("/{profileId}/follower/{userId}")
    @ApiOperation(value = "팔로워 목록 조회", response = String.class)
    public List<FollowDto> followerList(@PathVariable Long profileId, @PathVariable Long userId){
        return followService.getFollower(profileId, userId);
    }

    @GetMapping("/{profileId}/following/{userId}")
    @ApiOperation(value = "팔로잉 목록 조회", response = String.class)
    public List<FollowDto> followingList(@PathVariable Long profileId, @PathVariable Long userId){
        return followService.getFollowing(profileId, userId);
    }
}
